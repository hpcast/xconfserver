/*******************************************************************************
 * If not stated otherwise in this file or this component's Licenses.txt file the
 * following copyright and licenses apply:
 *
 * Copyright 2018 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

(function() {
    'use strict';

    angular
        .module('app.telemetrytwoprofile')
        .factory('telemetryTwoProfileService', service);

    service.$inject = ['$http'];

    function service($http) {
        var API_URL = 'api/telemetry/v2/profile/';

        return {
            createTelemetryTwoProfile: createTelemetryTwoProfile,
            updateTelemetryTwoProfile: updateTelemetryTwoProfile,
            getTelemetryTwoProfiles: getTelemetryTwoProfiles,
            getTelemetryTwoProfile: getTelemetryTwoProfile,
            deleteTelemetryTwoProfile: deleteTelemetryTwoProfile,
            exportOne: exportOne,
            getAll: getAll,
            getTelemetryTwoProfilesByIdList: getTelemetryTwoProfilesByIdList
        };

        function getAll() {
            return $http.get(API_URL);
        }

        function getTelemetryTwoProfiles(pageNumber, pageSize, context) {
            var url = API_URL + 'filtered?pageNumber=' + pageNumber + '&pageSize=' + pageSize;
            return $http.post(url, context);
        }

        function getTelemetryTwoProfile(id) {
            return $http.get(API_URL + id)
        }

        function createTelemetryTwoProfile(telemetryTwoProfile) {
            return $http.post(API_URL, telemetryTwoProfile);
        }

        function updateTelemetryTwoProfile(telemetryTwoProfile) {
            return $http.put(API_URL, telemetryTwoProfile);
        }

        function deleteTelemetryTwoProfile(id){
            return $http.delete(API_URL + id)
        }

        function exportOne(id) {
            window.open(API_URL + id + '?export');
        }

        function getTelemetryTwoProfilesByIdList(idList) {
            return $http.post(API_URL + "byIdList", idList);
        }
    }
})();