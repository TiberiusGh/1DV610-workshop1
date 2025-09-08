/**
 * @file Router for the application.
 * @module src/routes/router
 * @author Tiberius Gherac
 * @version 3.0.0
 */

import express from 'express'
import { router as homeRouter } from './homeRouter.js'

export const router = express.Router()

router.use('/', homeRouter)

// // Custom 404 (replaces the default 404 response)
// router.use('*', (req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 404
//   next(error)
// })
