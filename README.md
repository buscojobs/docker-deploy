## Docker Hub Build Process
1. ```git clone --recursive --depth 1 -b branch $URL```
2. Extract `Readme` and `Dockerfile`
3. ```docker build -t tagname --nocache```
4. Tar and upload the build context to S3 bucket
5. Push image (with all layers) to Registry
6. Worker or Builder cleans up build residue (mounted volumes, etc)
