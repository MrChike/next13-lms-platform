"use strict";
(() => {
var exports = {};
exports.id = 3961;
exports.ids = [3961];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 87503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 49411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 72477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 41041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 65628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 7842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/courses/[courseId]/chapters/[chapterId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  PATCH: () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/@mux/mux-node/dist/mux.mjs + 47 modules
var mux = __webpack_require__(30234);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 22 modules
var esm = __webpack_require__(24425);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(93302);
;// CONCATENATED MODULE: ./app/api/courses/[courseId]/chapters/[chapterId]/route.ts




const { Video } = new mux/* default */.Z(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);
async function DELETE(req, { params }) {
    try {
        const { userId } = (0,esm/* auth */.I8)();
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        const ownCourse = await db.db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            }
        });
        if (!ownCourse) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        const chapter = await db.db.chapter.findUnique({
            where: {
                id: params.chapterId,
                courseId: params.courseId
            }
        });
        if (!chapter) {
            return new next_response/* default */.Z("Not Found", {
                status: 404
            });
        }
        if (chapter.videoUrl) {
            const existingMuxData = await db.db.muxData.findFirst({
                where: {
                    chapterId: params.chapterId
                }
            });
            if (existingMuxData) {
                await Video.Assets.del(existingMuxData.assetId);
                await db.db.muxData.delete({
                    where: {
                        id: existingMuxData.id
                    }
                });
            }
        }
        const deletedChapter = await db.db.chapter.delete({
            where: {
                id: params.chapterId
            }
        });
        const publishedChaptersInCourse = await db.db.chapter.findMany({
            where: {
                courseId: params.courseId,
                isPublished: true
            }
        });
        if (!publishedChaptersInCourse.length) {
            await db.db.course.update({
                where: {
                    id: params.courseId
                },
                data: {
                    isPublished: false
                }
            });
        }
        return next_response/* default */.Z.json(deletedChapter);
    } catch (error) {
        console.log("[CHAPTER_ID_DELETE]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}
async function PATCH(req, { params }) {
    try {
        const { userId } = (0,esm/* auth */.I8)();
        const { isPublished, ...values } = await req.json();
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        const ownCourse = await db.db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            }
        });
        if (!ownCourse) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        const chapter = await db.db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId
            },
            data: {
                ...values
            }
        });
        if (values.videoUrl) {
            const existingMuxData = await db.db.muxData.findFirst({
                where: {
                    chapterId: params.chapterId
                }
            });
            if (existingMuxData) {
                await Video.Assets.del(existingMuxData.assetId);
                await db.db.muxData.delete({
                    where: {
                        id: existingMuxData.id
                    }
                });
            }
            const asset = await Video.Assets.create({
                input: values.videoUrl,
                playback_policy: "public",
                test: false
            });
            await db.db.muxData.create({
                data: {
                    chapterId: params.chapterId,
                    assetId: asset.id,
                    playbackId: asset.playback_ids?.[0]?.id
                }
            });
        }
        return next_response/* default */.Z.json(chapter);
    } catch (error) {
        console.log("[COURSES_CHAPTER_ID]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fchapters%2F%5BchapterId%5D%2Froute&name=app%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fchapters%2F%5BchapterId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fchapters%2F%5BchapterId%5D%2Froute.ts&appDir=%2Fhome%2Fmrchike%2Fcode%2Ffeatures%2Fnext13-lms-platform%2Fapp&appPaths=%2Fapi%2Fcourses%2F%5BcourseId%5D%2Fchapters%2F%5BchapterId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/courses/[courseId]/chapters/[chapterId]/route","pathname":"/api/courses/[courseId]/chapters/[chapterId]","filename":"route","bundlePath":"app/api/courses/[courseId]/chapters/[chapterId]/route"},"resolvedPagePath":"/home/mrchike/code/features/next13-lms-platform/app/api/courses/[courseId]/chapters/[chapterId]/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/courses/[courseId]/chapters/[chapterId]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [652,4813,4425,9565,5501,234,3302], () => (__webpack_exec__(7842)));
module.exports = __webpack_exports__;

})();