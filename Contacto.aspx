<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Contacto.aspx.cs" Inherits="WebApplication2.Contacto" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="content">
        <h1 class="h1contacto">Contacto</h1>
        <div class="divisorcontacto">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name"><br />
            <label for="email" class="label1">Correo:</label>
            <input type="email" id="email" name="email"><br />
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" class="inputmensaje"></textarea><br />
            <div class="divisorbotonenviar"><button type="submit" id="submit-btn" class="button-85">Enviar</button></div>
            <div id="success-msg">
            <p>¡Gracias por contactarnos!</p>
            </div>
        </div>
    </div>
</asp:Content>
