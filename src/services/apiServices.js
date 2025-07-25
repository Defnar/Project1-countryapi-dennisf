var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiError, FetchError } from "../errorHandlers/errorHandler.js";
export default function getCountryList(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //time in ms for fetch timeout
            const fetchTimeout = { signal: AbortSignal.timeout(5000) };
            const data = yield fetch(url, fetchTimeout);
            if (!data.ok) {
                const error = yield data.json();
                throw new ApiError(`${error.message}, refresh to try again.  If problem persists, please contact web administrator`);
            }
            const result = yield data.json();
            return result;
        }
        catch (error) {
            if (error instanceof ApiError)
                throw error;
            throw new FetchError("Failed to retrieve country data, please refresh to try again.  If problem persists, please contact web administrator");
        }
    });
}
