ASSETSFOLDER=tmp/uploads
for mediaFile in `ls $ASSETSFOLDER | grep .mp4`; do
    # cortar a extensao e a resolucao do arquivo
    FILENAME=$(echo $mediaFile | sed -n 's/.mp4//p')
    INPUT=$ASSETSFOLDER/$mediaFile
    FOLDER_TARGET=$ASSETSFOLDER/$FILENAME
    mkdir -p $FOLDER_TARGET

    # criar arquivos de resolucoes diferentes na pasta
    OUTPUT=$ASSETSFOLDER/$FILENAME/$FILENAME

    OUTPUT144=$OUTPUT-144
    OUTPUT360=$OUTPUT-360
    OUTPUT720=$OUTPUT-720

    echo 'rendering in 720p'
    ffmpeg -y -i $INPUT \
        -c:a aac -ac 2 \
        -vcodec h264 -acodec aac \
        -ab 128k \
        -movflags frag_keyframe+empty_moov+default_base_moof \
        -b:v 1500k \
        -maxrate 1500k \
        -bufsize 1000k \
        -vf "scale=-1:720" \
        -v quiet \
        $OUTPUT720.mp4
    
    echo 'rendering in 360p'
    ffmpeg -y -i $INPUT \
        -c:a aac -ac 2 \
        -vcodec h264 -acodec aac \
        -ab 128k \
        -movflags frag_keyframe+empty_moov+default_base_moof \
        -b:v 400k \
        -maxrate 400k \
        -bufsize 400k \
        -vf "scale=-1:360" \
        -v quiet \
        $OUTPUT360.mp4
    
    echo 'rendering in 144p'
    ffmpeg -y -i $INPUT \
        -c:a aac -ac 2 \
        -vcodec h264 -acodec aac \
        -ab 128k \
        -movflags frag_keyframe+empty_moov+default_base_moof \
        -b:v 300k \
        -maxrate 300k \
        -bufsize 300k \
        -vf "scale=256:144" \
        -v quiet \
        $OUTPUT144.mp4
    
    mv $INPUT $ASSETSFOLDER/$FILENAME
    echo "All videos are encoded!"
done