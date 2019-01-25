/*
 * @Author: Amiriya
 * @Date: 2019-01-25 15:55:27
 * @Description: Homepage data source.
 */
import { articles, hotArticles, recommendArticles } from '../../data/homePgaeData';

const homePage = (req, res) => {
    // Logger
    console.log(`req:${req}`);

    res.send({
        articles, hotArticles, recommendArticles
    });
}

export default homePage;
