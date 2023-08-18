using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Internal;

namespace QuizApi.model;

public class Question {
    
    [Key]
    public Guid QId { get; set; } = Guid.NewGuid();

    [Column(TypeName = "nvarchar(250)")]
    public string QnInWord { get; set; } = string.Empty;

    [Column(TypeName = "nvarchar(250)")]
    public string? ImgName { get; set; } 

    [Column(TypeName = "nvarchar(50)")]
    public string option1 { get; set; } = string.Empty;

    [Column(TypeName = "nvarchar(50)")]
    public string option2 { get; set; } = string.Empty;

    [Column(TypeName = "nvarchar(50)")]
    public string option3 { get; set; } = string.Empty;

    [Column(TypeName = "nvarchar(50)")]
    public string option4 { get; set; } = string.Empty;
 
    public int Answer { get; set; }


}