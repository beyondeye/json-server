UserController = function() {};

UserController.prototype.uploadFile = function(req, res) {
    var data = _.pick(req.body, 'type')
        , uploadPath = path.normalize(cfg.data + '/uploads')
    // We are able to access req.files.file thanks to
    // the multiparty middleware
    var file = req.files.file;
    console.log(file.name); //original name (ie: sunset.png)
    console.log(file.path); //tmp path (ie: /tmp/12345-xyaz.png)
    console.log(file.type);
    console.log(uploadPath); //uploads directory: (ie: /home/user/data/uploads)
}

module.exports = new UserController();