using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logical
{
    public class Bd
    {
        protected static IDbConnection OpenConnection(string strConection = "sConn")
        {
            IDbConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings[strConection].ConnectionString);
            connection.Open();
            return connection;
        }
    }
}
