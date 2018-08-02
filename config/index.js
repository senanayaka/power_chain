var config = {
    local: {
        mode: 'local',
        port: 3000,
        mongo: {
            host: '127.0.0.1',
            port: 27018
        }
    }

}

module.exports = function(mode) {
    return  config.local;
}