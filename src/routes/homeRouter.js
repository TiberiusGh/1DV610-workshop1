/**
 * @file Router for home.
 * @module src/routes/homeRouter
 * @author Tiberious Gherac
 * @version 3.0.0
 */

import express from 'express'
import { HomeController } from '../controller/HomeController.js'

export const router = express.Router()

const controller = new HomeController()

// // GET /
router.get('/', (req, res, next) => controller.index(req, res, next))

// // POST /
// router.post('/', (req, res, next) => controller.indexPost(req, res, next))
