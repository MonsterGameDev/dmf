import { STAGES } from './../../img/stages/index.js';  //'./stages.js';
import STAGEOPENINGS from './stage-openings.js';

class StageRetrievalService {
    getStageById(id) {
        const stage = STAGES.filter((stage) => stage.id === id);
        return stage.length === 1 ? stage[0] : null;
    }

    getAllStages() {
        return STAGES;
    }

    getStageOpeningById(id) {
        const stageOpenings = STAGEOPENINGS.filter((so) => so.id === id);
        return stageOpenings.length === 1 ? stageOpenings[0] : null;
    }

    getAllStageOpenings() {
        return STAGEOPENINGS;
    }
}

export default StageRetrievalService;