/**
 * Code generated by protoc-gen-twirp_js v5.0.0, DO NOT EDIT.
 * source: service.proto
 */
// import our twirp js library dependency
var createClient = require("twirp");
// import our protobuf definitions
var pb = require("./service_pb.js");

/**
 * A Haberdasher makes hats for clients.
 */
module.exports.createHaberdasherClient = function(baseurl, extraHeaders, useJSON) {
    var rpc = createClient(baseurl, "twitch.twirp.example.Haberdasher", "v5.0.0",  useJSON, extraHeaders === undefined ? {} : extraHeaders);
    return {
        /**
         * MakeHat produces a hat of mysterious, randomly-selected color!
         */
        makeHat: function(data) { return rpc("MakeHat", rpc.buildMessage(pb.Size, data), pb.Hat); }
    }
}

