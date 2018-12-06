<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
	<head>
	</head>
	<body>
		<c:forEach items="products" var="product">
			<div class="product">
				<p>${product.name}</p>
		   		<p>${product.price}</p>
			</div>
		</c:forEach>
	</body>
</html>