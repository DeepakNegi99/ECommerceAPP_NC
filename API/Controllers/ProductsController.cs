using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")] // https://localhost:5001/api/products
    [ApiController]
    public class ProductsController(StoreContext context) : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Product>> GetProduct()
        {
            return context.Products.ToList();
        }

        [HttpGet("{id}")] // api/products/1
        public ActionResult<Product> GetProduct(int id)
        {
            var product = context.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
    }
}
