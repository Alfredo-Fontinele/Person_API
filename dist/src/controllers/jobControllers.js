"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobControllers = void 0;
const jobsServices_1 = require("./../services/jobsServices");
exports.JobControllers = {
    getAllJobs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield jobsServices_1.JobsServices.getAllJobs(req);
        return res.status(200).json(data);
    }),
    createJob: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield jobsServices_1.JobsServices.createJob(req);
        return res.status(201).json(data);
    }),
    getJobById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield jobsServices_1.JobsServices.getJobById(req);
        return res.status(200).json(data);
    }),
    updateJob: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield jobsServices_1.JobsServices.updateJob(req);
        return res.status(200).json(data);
    }),
    deleteJob: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield jobsServices_1.JobsServices.deleteJob(req);
        return res.status(204).json(data);
    })
};
//# sourceMappingURL=jobControllers.js.map