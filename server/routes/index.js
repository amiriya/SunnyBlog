import express from 'express';
const router = express.Router();

import homePage from './get/index';
router.get(['/', '/index', '/home', '/homepage'], homePage);

import article from './get/article';
router.get('/article', article);

export default router;
