import protobuf from 'protobufjs';

export async function init() {
    return new Promise((resolve, reject) => {
        protobuf.load('/assets/pb/dy.proto', function(err, root) {
            if (err) reject(err);
            if (!root) reject('init pb failed');
            window.PB = root!;
            resolve('ok');
        })
    });
}