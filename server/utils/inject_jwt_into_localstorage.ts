export default (token:string)=>{
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <script>
                localStorage.setItem("token","${token}");
                window.location="/";
            </script>
        </head>
    </html>
`;
}