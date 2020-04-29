using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Examen.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class BibliotecaController : ApiController
    {
        Logical.Book dll = new Logical.Book();


        [HttpGet]
        public IHttpActionResult GetBooks()
        {
            try
            {
                return Ok(dll.GetBooks());

            }
            catch (Exception e)
            {

                return Conflict();
            }
        }

        [HttpPost]
        public IHttpActionResult SaveBook(Objects.Books books)
        {
            try
            {
                return Ok(dll.SaveBook(books));

            }
            catch (Exception e)
            {

                return Conflict();
            }
        }
    }
}