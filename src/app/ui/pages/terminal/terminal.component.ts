import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class TerminalComponent {

    commandInput = '';
    terminalLines = new Array();

    @ViewChild('customScrollbar') private customScrollbar: ElementRef;

    constructor() {
    }


    onEnter(command: string) {

        const commandToLowerCase = command.toLowerCase();

        switch (commandToLowerCase) {

            case '' :
                break;
            // Clean Terminal
            case 'clear' :
            case 'cls' :
                this.terminalLines = new Array();
                break;
            // Show Available Commands
            case '0':
            case 'h':
            case 'help':
                this.getHelp();
                break;
            // All Work Experiences
            case '1':
            case 'w':
            case 'work':
                this.getWork(command, 'all');
                break;
            // Correios
            case 'wc':
            case 'correios':
                this.getWork(command, 'correios');
                break;
            // Petrobras
            case 'wp':
            case 'petrobas':
                this.getWork(command, 'petrobras');
                break;
            // Old Companies
            case 'wo':
            case 'old':
                break;
                this.getWork(command, 'petrobras');
                break;
            // Description
            case '2':
            case 'd':
            case 'description':
                break;
            // Shows all Studies
            case '3':
            case 's':
            case 'study':
                break;
            //  Shows all hobbies.
            case '4':
            case 'h':
            case 'hobby':
                break;
            // Shows all certifications.
            case '5':
            case 'c':
            case 'certification':
                break;
            // Export a PDF version of the resume.
            case '6':
            case 'e':
            case 'export':
                break;
            // Contact.
            case '7':
            case 'cc':
            case 'contact':
                this.getContacts(command);
                break;
            // Command is not recognized.
            default:
                this.getCommand(command);
                this.terminalLines.push('<p class="terminal-command-error">\'' + command + '\' command is not recognized.</p>');

        }

        this.commandInput = '';

    }


    getCommand(command: string) {
        this.terminalLines.push('<p class="terminal-command">' + command + '</p>');
    }

    getHelp() {

        let help = '';

        help += '<p class="terminal-command2">Available Commands</p>';
        help += '<p class="terminal-command2">  > 1 or \'r\' or \'resume\'</p>';
        help += '<p class="terminal-command2">  > 2 or \'d\' or description</p>';
        help += '<p class="terminal-command2">  > 3 or \'s\' or studies</p>';
        help += '<p class="terminal-command2">  > 4 or \'h\' or hobbies - Shows all hobbies.</p>';
        help += '<p class="terminal-command2">  > 5 or \'c\' or \'certifications\' - Shows all certifications.</p>';
        help += '<p class="terminal-command2">  > 6 or \'e\' or \'export\' - Export a PDF version of the resume.</p>';

        this.terminalLines.push(help);
    }

    getWork(command: string, company: string) {


        let work = '';

        work += '<p class="terminal-command2">Work Experience</p>';

        if (company === 'all' || company === 'correios') {
            work += '<p class="company-title mt-2" >' +
                '<img src="./assets/images/correios.png" height="15px" alt="Correios">  Correios (Brazilian Post)</p>';
            work += '<p class="company-work-period>From Aug 2011 to Current Job</p>';
            work += '<p class="company-role">Role: Software Developer</p>';
            work += '<p class="company-description">' +
                'One of the largest companies in the country with more than 100,000 employees. ' +
                'The Brazilian Post is a state-owned company that operates the national postal service of Brazil.</p>';

            work += '<p class="company-projects">Main Projects:</p>';
            work += '<p class="">Electronic Invoice System</p>';
            work += '<p class="">System responsible for issuing a copy of the invoice (bank slip) and the invoice statement,' +
                ' through the Internet, for more than 20,000 clients.</p>';
            work += '<ul>';
            work += '<li>Developed using Java EE, EJB3, JSF 2 (Primefaces), Facelets, CDI, JPA, Hibernate and Web Services.</li>';
            work += '<li>Reports created with Jasper.</li>';
            work += '<li>Versioned with Subversion SVN, built and delivered automatically with Maven and Jenkins.</li>';
            work += '<li>Refactored following Clean Code and SOLID principles, making the code more legible and easy to maintain.</li>';
            work += '</ul>';
            work += '<p class="">/p>';


        }

        if (company === 'all' || company === 'petrobras') {
            work += '<p class="company-title mt-2"><img src="./assets/images/petrobras.png" height="15px" alt="Petrobras">Petrobras</p>';
            work += '<p class="terminal-command2">  > Petrobras - 2009 - 2011</p>';
            work += '<p class="terminal-command2">      * Java Web Developer</p>';
            work += '<ul>';
            work += '<li>Developed using Java EE, EJB3, JSF 2 (Primefaces), Facelets, CDI, JPA, Hibernate and Web Services.</li>';
            work += '<li>Reports created with Jasper.';
            work += '<ul>';
            work += '<li>Total 1</li>';
            work += '<li>Total 2</li>';
            work += '<li>Total 3</li>';
            work += '</ul>';
            work += '</li>';
            work += '<li>Versioned with Subversion SVN, built and delivered automatically with Maven and Jenkins.</li>';
            work += '<li>Refactored following Clean Code and SOLID principles, making the code more legible and easy to maintain.</li>';
            work += '</ul>';
        }

        if (company === 'all' || company === 'old') {
            work += '<p class="terminal-command2">  > Imago - 2008 - 2009</p>';
            work += '<p class="terminal-command2">      * Java Web Developer Intern</p>';
        }

        this.terminalLines.push(work);

    }

    getStudies(command: string) {


    }

    getContacts(command: string) {

        let contact = '';
        contact += '<p class="terminal-command2"><b>Contacts</b></p>';
        contact += '<p class="terminal-command2">Email: victorcaetano@live.com</p>';
        contact += '<p class="terminal-command2">Telephone: +55 21 98242-9050</p>';

        this.terminalLines.push(contact);
    }


    scrollTerminalToBottom() {
        this.customScrollbar.nativeElement.scrollTop = this.customScrollbar.nativeElement.scrollHeight;
    }

}
