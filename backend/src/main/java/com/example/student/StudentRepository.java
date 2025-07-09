package com.example.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // ⬅️ Add this annotation to be safe
public interface StudentRepository extends JpaRepository<Student, Long> {
}
