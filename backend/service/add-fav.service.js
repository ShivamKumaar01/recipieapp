const { Like } = require('../models');

exports.pushInLike = async (Userid, recipieid) => {
    console.log(Userid)
    console.log(recipieid)
    if (!recipieid || !Userid) {
        throw new Error("recipie id and likebywhom is missing");
    }
    const recipie = await Like.findOne({ where: { recipieid: recipieid, likedByWhom: Userid } })

    if (recipie) {
        throw new Error("phle se hi like kiya hua hai")
    }
    const like = await Like.create({ recipieid: recipieid, likedByWhom: Userid });
    return like;
}