/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Project.services;

import Project.entites.Command;
import Project.entites.Equipement;
import Project.entites.Notification;
import Project.entites.Product;
import Project.entites.User;
import Project.repositories.NotificationRepository;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author mohamed
 */
@RestController
@RequestMapping(path = "/notification1")
public class NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;      
    @PersistenceContext
    EntityManager em;
    
 
    
    
    
    
    
    
     @CrossOrigin(origins = "http://localhost:4200")
     @GetMapping(path = "/all")
       public @ResponseBody List<Notification> findall()
               {
                   return (List<Notification>) notificationRepository.findAll();
               }
       
        @CrossOrigin(origins = "http://localhost:4200")
     @GetMapping(path = "/unseen")
       public @ResponseBody List<Notification> findUnseen(@RequestBody int id)
               {
                   
               List<Notification> l =     (List<Notification>) notificationRepository.findAll();
               for(int i =0 ; i< l.size();i++)
               {
                   if(l.get(i).getReceiver().getId()!=id ||  l.get(i).getStatus()==1) l.remove(i);
               }
               return l;
               }
       
@CrossOrigin(origins = "http://localhost:4200")
@GetMapping(path = "/allseen")
public @ResponseBody List<Notification> setStatusForEARAttachment()
{
    
   
     List<Notification> l =  (List<Notification>) notificationRepository.findAll();
      for(int i =0 ; i< l.size();i++)
               {
                   l.get(i).setStatus(1);
                   notificationRepository.save(l.get(i));
                   
               }
                return (List<Notification>) notificationRepository.findAll();

}
       
       
       
     @PostMapping("/add")
       @CrossOrigin(origins = "http://localhost:4200")
	Notification newNotif(@RequestBody Notification newNotif) {
		return notificationRepository.save(newNotif);
	}   
    
}
