import { exec } from 'child_process';

var cmd = "curl -i -s -k -X $'GET' \
-H $'Host: staging.freeclimb.com' \
-b $'sessionId=6a5b36ae41d42e0aaa37c9d9880fb10c6e6a52936720b0493272edc03a41996d' \
$'https://staging.freeclimb.com/dashboard-server/account'";

exec(cmd,
    function (error, stdout, stderr) {
        console.log('\n------------------- BASH stdout -------------------\n' + stdout);
        console.log('\n------------------- BASH stderr -------------------\n' + stderr);

        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
