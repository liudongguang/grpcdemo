var PROTO_FILE_PATH='D:/Users/liudo/WebstormProjects/grpcdemo/proto/Student.proto'
var grpc=require('grpc')
var grpcService=grpc.load(PROTO_FILE_PATH).com.ldg.proto;
var client=new grpcService.StudentService('localhost:8899',grpc.credentials.createInsecure());

console.log(client);
client.getRealNameByUsername({username:'lisi'},function (err,respData) {
    console.log(respData);
});