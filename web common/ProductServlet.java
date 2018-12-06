
// 导入必需的 java 库
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// 扩展 HttpServlet 类
public class HelloWorld extends HttpServlet {

	private String message;

	public void init() throws ServletException {
		// 执行必需的初始化
		message = "Hello World";
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response){
 
		String name = request.getParam("name");
		List<Product> products = ProductService.search(name);

		request.setAttribute("products", products);

			RequestDispatcher rd;
		rd = getServletContext().getRequestDispatcher("/products.jsp");
		rd.forward(request,response); 
	}

	public void destroy() {
		// 什么也不做
	}
}
