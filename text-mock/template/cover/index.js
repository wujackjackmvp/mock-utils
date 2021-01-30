import request from './request';
// 遍历mockapi
<% _.forEach(data.mocks, function(mock){ %>/** {{mock.description}} */
function {{$$.convertMethod(mock)}}(data) {
  return request({
    method: '{{mock.method}}',
    url:'{{mock.url}}',
    {{mock.method === 'get' ? 'params' : 'data'}}: data
  });
}

<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
};
