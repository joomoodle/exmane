using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
namespace Logical
{
    public class Book : Bd
    {
        public int SaveBook(Objects.Books books)
        {
            using (IDbConnection connection = OpenConnection())
            {
                return connection.Execute("dbo.save_book", new
                {
                    titulo = books.titulo,
                    numero_volumen = books.numero_volumen,
                    estante = books.estante,
                    sala = books.sala,
                    librero = books.librero,
                    posicion = books.posicion,

                }, commandType: CommandType.StoredProcedure, commandTimeout: 0); ;

            }
        }

        public IEnumerable<Objects.Books> GetBooks()
        {
            using (IDbConnection connection = OpenConnection())
            {
                return connection.Query<Objects.Books>("dbo.GetBooks", commandType: CommandType.StoredProcedure).ToList();

            }
        }
    }
}
