const generatePage = employeesArr => {
    return `
        <section class="employee-container">
            <div class="employees">
            ${employeesArr
                .filter(({ role }) => role ==='Manager')
                .map(({ id, name, email, officeNumber, role }) => {
                    return `
                        <div class="employee">
                            <div class="main-heading">
                                <h3 class="name">${id}</h3>
                                <h4 class="role">${role}</h4>
                            </div>
                            <ul>
                                <li>ID: ${name}</li>
                                <li>Email: <a href="mailto:${email}">${email}</a></li>
                                <li>Office Number: ${officeNumber}</li>
                                </ul>
                        </div>
                    `;
                })
            .join('')}
        ${employeesArr
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, role, github }) => {
                return `
                    <div class="employee">
                        <div class="main-heading">
                            <h3 class="name">${id}</h3>
                            <h4 class="role"> ${role}</h4>
                        </div>
                        <ul>
                            <li>ID: ${name}</li>
                            <li>Email: <a href="mailto:${email}">${email}</a></li>
                            <li>Github: <a href="https://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                `;
            })
            .join('')}
            ${employeesArr
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `
                    <div class="employee">
                        <div class="main-heading">
                            <h3 class="name">${id}</h3>
                            <h5 class="role"> ${role}</h5>
                        </div>
                        <ul>
                            <li>ID: ${name}</li>
                            <li>Email: <a href="mailto:${email}">${email}</a></li>
                            <li>School: ${school}</li>
                        </ul>
                    </div>
                `;
            })
            .join('')}
        </div>
        </section>
    `;
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap');
        </style>
    </head>
    <body>
        <header>
                <h1 class="title">My Team</h1>
        </header>
        <main>
            ${generatePage(templateData)}
        </main>
    </body>
    </html>
    `;
};