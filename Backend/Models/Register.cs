namespace Backend.Models
{
    public class Register
    {
        public decimal value { get; set; }
        public int instalments { get; set; }

        public Register(decimal value, int instalments)
        {
            this.value = value;
            this.instalments = instalments;
        }
    }
}