/*
 * @Author: Amiriya
 * @Date: 2019-01-25 15:59:21
 * @Description: Article info
 */
import { articles } from '../../data/articlePgaeData';
import { RetCode } from '../../libs/common';

const article =  (req, res) => {
    let { articleId } = req.query;
    // Logger
    console.log(`artcileId: ${articleId}`);

    if( !articleId ){
        res.send({
            retCode: RetCode.PARAMEMPTY,
            msg: 'articleId 为空'
        });
    }

    let article = articles && articles[articleId];
    let retCode = article ? RetCode.SUCCESS : RetCode.EMPTY;
    res.send({
        retCode,
        article
    });
}

export default article;
