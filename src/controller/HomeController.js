/**
 * @file Home controller.
 * @module src/controllers/HomeController
 * @author Tiberius Gherac
 * @version 3.0.0
 */

import { format } from 'date-fns'

/**
 * Encapsulates a controller.
 */
export class HomeController {
  /**
   * Renders a view and sends the rendered HTML string as an HTTP response.
   * index GET.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  index(req, res, next) {
    res.render('home/index')
  }

  /**
   * Renders a view, based on posted data, and sends
   * the rendered HTML string as an HTTP response.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  indexPost(req, res, next) {
    const viewData = {
      name: req.body.name,
      dayName: format(new Date(), 'iiii')
    }

    res.render('home/index', { viewData })
  }
}
