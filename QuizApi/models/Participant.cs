using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApi.model;

public class Participant{

    [Key]
    public Guid ParticipantId { get; set; } = Guid.NewGuid();

    [Column(TypeName = "nvarchar(50)")] 
    public string Name { get; set; } = string.Empty;

    public int Score { get; set; }

    public int timeTaken { get; set; }

}