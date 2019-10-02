"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heroes = require('../../dist/data.json');
var HeroRouter = /** @class */ (function () {
    function HeroRouter() {
        // not much here yet
    }
    HeroRouter.create = function (router) {
        //log
        console.log("[HeroRoute::create] Creating HeroRoutes route.");
        //add getAll route
        router.get("/api/heroes", function (req, res, next) {
            new HeroRouter().getAll(req, res, next);
        });
        // add getOne route
        router.get("/api/heroes/:id", function (req, res, next) {
            new HeroRouter().getOne(req, res, next);
        });
    };
    /**
     * GET one hero by id
     */
    HeroRouter.prototype.getOne = function (req, res, next) {
        var query = parseInt(req.params.id);
        var hero = Heroes.find(function (hero) { return hero.id === query; });
        if (hero) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                hero: hero
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No hero found with the given id.',
                status: res.status
            });
        }
    };
    /**
     * GET all Heroes.
     */
    HeroRouter.prototype.getAll = function (req, res, next) {
        res.send(Heroes);
    };
    return HeroRouter;
}());
exports.HeroRouter = HeroRouter;
//# sourceMappingURL=heroRouter.js.map