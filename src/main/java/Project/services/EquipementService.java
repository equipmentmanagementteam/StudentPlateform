/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Project.services;

import Project.entites.Equipement;
import Project.entites.Product;
import Project.entites.User;
import Project.repositories.EquipementRepository;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author mohamed
 */
@RestController
@RequestMapping(path = "/equipements1")
public class EquipementService {
    @Autowired
    private EquipementRepository EquipementRepository;
    
    
        @PersistenceContext
    EntityManager em;
    
    public List <Equipement> findAllEQ(){
   return em.createQuery("from Equipement",Equipement.class).getResultList();
}
    

     @GetMapping(path = "/all")
       public @ResponseBody List<Equipement> findall()
               {
                   return findAllEQ();
               }
    
}
