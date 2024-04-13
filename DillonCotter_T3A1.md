# Dillon Cotter T3A1 - Workbook.  

### 1. Provide an overview and description of a standard source control process for a large project  
Source control assists in managing and tracking changes to code.  
You will first have to decide on which system to use, e.g. Git.

1. Create a central repository where all the project's code and documents are held.  
2. Master/Main branch will hold the stable code.  
3. Developers create separate branches for new features or fixes.  
4. Changes from these branches are reviewd with a pull or merge request  
5. Git performs automatic checks to ensure code does not conflict, but does not perform any tests on the code itself.  
6. In larger projects, peer reviews are essential to ensure that the code adheres to the overall project guidlines.  
7. Once checks are complete, the branch can be merged to the Main/Master branch.  
8. After merginf, this code should be tested by other developers or QA members of the project team.  
9. All developers should ensure to clone main/master followed by branching before any work starts, to ensure they are running the most up to date codebase.  

Other considerations are to have clear lines of communcation amongst the team at all times, and that each commit has meaningful messages for the changes made, with developers also responsible for updating documentation.  
It is also good practice to incorporate Backup and recovery methods to prvent potential data loss and support a disaster recovery plan.  

### 2. What are the most important aspects of quality software?  
1. Functionality  
Referring to how well the software meets the needs it was designed for.  This includes suitability, accuracy, compliance and security.  

2. Reliability  
How stable and dependable is the software. It includes aspects like maturity, fault tolerance, and recoverability in the event of crash or errors.  

3. Usability  
How easy and pleasant the software is to use. This may be understandability, learnability, operability and attractiveness.  

4. Efficiency  
This relates to the software's performance and resource usage. It includes time behaviour and resource utilisation.  

5. Maintainability  
How easy is it to modify and update the software.  This may encompas modularity, reusability, changeability and testability.  

6. Portability 
How easy is it for software to transfer from one environemtn to another. This could be installability and replaceability, and how easy it is to run on various platforms.  

*Reference: [Turing Blog Post](https://www.turing.com/blog/software-quality-assurance-and-its-importance/)*