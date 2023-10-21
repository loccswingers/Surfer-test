self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/conti/conti.handler.js',
    client: '/conti/conti.client.js',
    bundle: '/conti/conti.bundle.js',
    config: '/conti/conti.config.js',
    sw: '/conti/conti.sw.js',
};