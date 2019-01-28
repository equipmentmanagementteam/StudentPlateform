/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Project.services;

import Project.entites.Command;
import Project.entites.User;
import Project.repositories.CommandRepository;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@RequestMapping(path = "/command1")
public class CommandServices {
    
     @Autowired
    private CommandRepository commandRepository;
     
     
            @PersistenceContext
    EntityManager em;
    
    public User findUser(int id ){
   return (User) em.createQuery("from User where id = "+id,User.class).getResultList().get(0);
}
    
       public List< Command> findUserCommands(int id ){
   return (List<Command>) em.createQuery("from Command where student_id = "+id,Command.class).getResultList();
}
     
     
     
     @CrossOrigin(origins = "http://localhost:4200")
     @GetMapping(path = "/all")
       public @ResponseBody List<Command> findall()
               {
                   return (List<Command>) commandRepository.findAll();
              
               }
       @CrossOrigin(origins = "http://localhost:4200")
     @GetMapping(path = "/mycommands")
       public @ResponseBody List<Command> findallUserCommand()
               {
             
               return findUserCommands(2);
               }
              
               
       
       
      
      @PostMapping("/add")
       @CrossOrigin(origins = "http://localhost:4200")
	Command newCommand(@RequestBody Command newCommand) {
		return commandRepository.save(newCommand);
	}
    
    
    
}
