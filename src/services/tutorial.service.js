import http from '../http-comman'

class TutorialService{
      get(id) {
     return http.get(`/tutorials/${id}`);
   }
    getAll(){
    return http.get("/tutorials")
    }
    create(data) {
        return http.post("/tutorials", data);
         }
         update(id, data) {
   return http.put(`/tutorials/${id}`, data);
  }
   delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
}
export default new TutorialService;

// import http from '../http-common'
// class TutorialService
// {

//     getAll() {
//     return http.get("/tutorials/");
//   }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }

// }


// export default  TutorialService;