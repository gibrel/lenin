
using SQLitePCL;

namespace API.Errors
{
    public class ApiResponse
    {

        public int StatusCode { get; set; }
        public string Message { get; set; }

        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you have made",
                401 => "Authorized, you are not",
                404 => "Resource found, it was not",
                500 => "Fear of making mistakes are the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. And so to carrer change.",
                _ => null
            };
        }
    }
}