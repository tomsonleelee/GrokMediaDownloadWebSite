#!/bin/bash

# 圖片裁切腳本
# 將 feat*.jpg 裁切成 16:10 比例，輸出 1280x800 和 640x400 兩種尺寸

INPUT_DIR="/Users/tomson/Projects/GrokMediaDownloadWebSite/assets"
OUTPUT_DIR="/Users/tomson/Projects/GrokMediaDownloadWebSite/assets/resized"

TARGET_RATIO=1.6  # 16:10 = 1.6

mkdir -p "$OUTPUT_DIR"

for img in "$INPUT_DIR"/feat*.jpg; do
    filename=$(basename "$img" .jpg)

    # 取得原始尺寸
    width=$(sips -g pixelWidth "$img" | tail -1 | awk '{print $2}')
    height=$(sips -g pixelHeight "$img" | tail -1 | awk '{print $2}')

    echo "處理: $filename ($width x $height)"

    # 計算目標裁切尺寸（保持 16:10 比例）
    current_ratio=$(echo "scale=4; $width / $height" | bc)

    if (( $(echo "$current_ratio > $TARGET_RATIO" | bc -l) )); then
        # 圖片太寬，需要裁切寬度
        new_width=$(echo "scale=0; $height * $TARGET_RATIO / 1" | bc)
        new_height=$height
    else
        # 圖片太高，需要裁切高度
        new_width=$width
        new_height=$(echo "scale=0; $width / $TARGET_RATIO / 1" | bc)
    fi

    # 計算裁切位置（從中心裁切）
    crop_x=$(echo "scale=0; ($width - $new_width) / 2 / 1" | bc)
    crop_y=$(echo "scale=0; ($height - $new_height) / 2 / 1" | bc)

    echo "  裁切區域: ${new_width}x${new_height} (起點: $crop_x, $crop_y)"

    # 複製原檔到暫存
    cp "$img" "$OUTPUT_DIR/${filename}_temp.jpg"

    # 裁切成 16:10 比例
    sips -c $new_height $new_width "$OUTPUT_DIR/${filename}_temp.jpg" --out "$OUTPUT_DIR/${filename}_cropped.jpg" > /dev/null 2>&1

    # 縮放到 1280x800
    sips -z 800 1280 "$OUTPUT_DIR/${filename}_cropped.jpg" --out "$OUTPUT_DIR/${filename}_1280x800.jpg" > /dev/null 2>&1

    # 縮放到 640x400
    sips -z 400 640 "$OUTPUT_DIR/${filename}_cropped.jpg" --out "$OUTPUT_DIR/${filename}_640x400.jpg" > /dev/null 2>&1

    # 清理暫存檔
    rm -f "$OUTPUT_DIR/${filename}_temp.jpg" "$OUTPUT_DIR/${filename}_cropped.jpg"

    echo "  完成: ${filename}_1280x800.jpg, ${filename}_640x400.jpg"
done

echo ""
echo "=========================================="
echo "所有圖片已處理完成！"
echo "輸出目錄: $OUTPUT_DIR"
ls -lh "$OUTPUT_DIR"/*.jpg
