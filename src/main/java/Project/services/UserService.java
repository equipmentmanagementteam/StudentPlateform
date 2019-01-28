/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Project.services;

import Project.entites.User;
import Project.repositories.UserRepository;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author mohamed
 */
@RestController
@RequestMapping(value = "/user1")
public class UserService implements Serializable{
    
    @Autowired
    private UserRepository userRepository;
    
    
       @PersistenceContext
    EntityManager em;
    
    public User findUser(int id ){
   return (User) em.createQuery("from User where id = "+id,User.class).getResultList().get(0);
}
    
    
     @CrossOrigin(origins = "http://localhost:4200")
      @GetMapping(path = "/userbyid")
    public @ResponseBody Optional<User> findUserById(@RequestParam Integer id)
    {
        return  this.userRepository.findById(id);
    }
    
       @CrossOrigin(origins = "http://localhost:4200")
      @GetMapping(path = "/user")
    public @ResponseBody User  findUseId(@RequestParam int id)
    {
        return  findUser(id);
    }
    
}
