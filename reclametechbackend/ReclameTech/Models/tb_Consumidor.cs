//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReclameTech.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tb_Consumidor
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tb_Consumidor()
        {
            this.tb_Reclamacao = new HashSet<tb_Reclamacao>();
        }
    
        public int Id_consumidor { get; set; }
        public string senhaConsumidor { get; set; }
        public string emailConsumidor { get; set; }
        public string cpf { get; set; }
        public string telefoneConsumidor { get; set; }
        public string nomeConsumidor { get; set; }
        public Nullable<int> fk_cidade { get; set; }
    
        public virtual tb_Cidade tb_Cidade { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tb_Reclamacao> tb_Reclamacao { get; set; }
    }
}