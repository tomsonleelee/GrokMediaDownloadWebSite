#!/bin/bash

# 影片壓縮腳本
# 用法: ./compress-video.sh 輸入檔案.mp4 [品質等級]
# 品質等級: high, medium, low (預設: medium)

INPUT="$1"
QUALITY="${2:-medium}"

if [ -z "$INPUT" ]; then
    echo "用法: ./compress-video.sh 輸入檔案.mp4 [high|medium|low]"
    echo ""
    echo "品質等級:"
    echo "  high   - 高品質 (CRF 20)，檔案較大"
    echo "  medium - 平衡品質 (CRF 24)，推薦"
    echo "  low    - 小檔案 (CRF 28)，品質稍降"
    exit 1
fi

if [ ! -f "$INPUT" ]; then
    echo "錯誤: 找不到檔案 '$INPUT'"
    exit 1
fi

# 取得檔名（不含副檔名）
FILENAME="${INPUT%.*}"
OUTPUT="${FILENAME}_compressed.mp4"

# 根據品質等級設定參數
case $QUALITY in
    high)
        CRF=20
        AUDIO_BITRATE="192k"
        ;;
    medium)
        CRF=24
        AUDIO_BITRATE="128k"
        ;;
    low)
        CRF=28
        AUDIO_BITRATE="96k"
        ;;
    *)
        echo "未知品質等級: $QUALITY (使用 high, medium, 或 low)"
        exit 1
        ;;
esac

echo "=========================================="
echo "影片壓縮工具"
echo "=========================================="
echo "輸入檔案: $INPUT"
echo "輸出檔案: $OUTPUT"
echo "品質等級: $QUALITY (CRF: $CRF)"
echo "=========================================="

# 顯示原始檔案大小
ORIGINAL_SIZE=$(ls -lh "$INPUT" | awk '{print $5}')
echo "原始大小: $ORIGINAL_SIZE"
echo ""
echo "開始壓縮..."

# 執行壓縮
ffmpeg -i "$INPUT" \
    -c:v libx264 \
    -crf $CRF \
    -preset medium \
    -c:a aac \
    -b:a $AUDIO_BITRATE \
    -movflags +faststart \
    -y \
    "$OUTPUT"

if [ $? -eq 0 ]; then
    COMPRESSED_SIZE=$(ls -lh "$OUTPUT" | awk '{print $5}')
    echo ""
    echo "=========================================="
    echo "壓縮完成!"
    echo "原始大小: $ORIGINAL_SIZE"
    echo "壓縮後:   $COMPRESSED_SIZE"
    echo "輸出檔案: $OUTPUT"
    echo "=========================================="
else
    echo "壓縮失敗!"
    exit 1
fi
