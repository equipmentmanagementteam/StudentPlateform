/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Project.services;

import Project.entites.Product;
import Project.repositories.ProductRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author mohamed
 */
@RestController
@Controller
@RequestMapping(path = "/product1")
public class ProductController  {
   @Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private ProductRepository productRepository;
      
   
        
   
	@GetMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addNewProduct (@RequestParam String name
			, @RequestParam String email) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Product n = new Product();
		n.setName(name);
		n.setDescription(email);
		productRepository.save(n);
		return "Saved";
	}
        
        @PostMapping("/employees")
	Product newProduct(@RequestBody Product newProduct) {
		return productRepository.save(newProduct);
	}
        
        @GetMapping(path="jaw")
        public @ResponseBody String  create(Product p) throws JsonProcessingException 
        {
            Product n = new Product();
            n.setDescription("moch normal");
            n.setName("mohamed khemiri");
            productRepository.save(n);
            ObjectMapper mapper = new ObjectMapper();
            
            return(mapper.writeValueAsString(n));
        }
        @CrossOrigin(origins = "http://localhost:4200")
       @GetMapping(path = "/all")
       public @ResponseBody List<Product> findall()
               {
                   return (List<Product>) productRepository.findAll();
               }
}