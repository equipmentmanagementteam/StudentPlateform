/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Project.repositories;

import Project.entites.Command;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author mohamed
 */
public interface CommandRepository extends CrudRepository<Command, Integer>{
    
}
