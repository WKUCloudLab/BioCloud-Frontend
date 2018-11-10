import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  stageTracker = 1;
  stageLength = 4;

  jobName = "Untitled";

  activeWindow = "Job Receipt";
  activeFile = null;
  activeTool = null;
  activeCommand = null;

  receiptError = null;
  toolError = null;
  configureError = null;

  jobStages = [];
  /*
  jobStages = [ 
    {
      tool: "FastQC",
      attributes: [
        {
          name: "test",
          option: "choice",
        },
        {
          name: "test",
          option: "choice",
        },
      ],
    }, 
    {
      tool: "FastQC",
      attributes: [
        {
          name: "test",
          option: "choice",
        },
      ],
    }, 
  ];  
  */

  files = [
    {
      id: '1',
      name: 'ERR000044_1.fastq',
      type: 'fastq',
      size: 1234,
      created: "2016-03-03 01:01:01"
    },
  ];

  templates = [];

  tools = [
    {
      id: 1,
      command: "fastqc",
      name: "FastQC",
      basicDescription: "FastQC is a Biotool used for verifying raw sequencing data.",
      advancedDescription: "FastQC aims to provide a simple way to do some quality control checks on raw sequence data coming from high throughput sequencing pipelines. It provides a modular set of analyses which you can use to give a quick impression of whether your data has any problems of which you should be aware before doing any further analysis.",
      fileTypes: [
        "fastq",
      ],
      commands:[
        {
          command: "DEFAULT",
          name: null,
          basicDescription: null,
          advancedDescription: null,
          requiredArguments:[

          ],
          optionalArguments:[
            {
              argument: "casava",
              name: "Casava",
              basicDescription: "",
              advancedDescription: "Files come from raw casava output. Files in the same sample group (differing only by the group number) will be analysed as a set rather than individually. Sequences with the filter flag set in the header will be excluded from the analysis. Files must have the same names given to them by casava (including being gzipped and ending with .gz) otherwise they won't be grouped together correctly",
              inputType: "boolean",
              placeholder: null,
              dependencies: null,
              options: null,
            },
            {
              argument: "nofilter",
              name: "No Filter",
              basicDescription: "",
              advancedDescription: "If running with --casava then don't remove read flagged by casava as poor quality when performing the QC analysis.",
              inputType: "boolean",
              placeholder: null,
              dependencies: ["casava"],
              options: null,
            },
            {
              argument: "noGroup",
              name: "No Group",
              basicDescription: "",
              advancedDescription: "Disable grouping of bases for reads >50bp. All reports will show data for every base in the read.  WARNING: Using this option will cause fastqc to crash and burn if you use it on really long reads, and your plots may end up a ridiculous size. You have been warned!",
              inputType: "boolean",
              placeholder: null,
              dependencies: null,
              options: null,
            },
            {
              argument: "format",
              name: "Format",
              basicDescription: "",
              advancedDescription: "Bypasses the normal sequence file format detection and forces the program to use the specified format.  Valid formats are bam,sam,bam_mapped,sam_mapped and fastq",
              inputType: "selection",
              placeholder: null,
              dependencies: null,
              options: ["fastq", "bam", "sam", "bam_mapped", "sam_mapped"],
            },
            {
              argument: "threads",
              name: "Threads",
              basicDescription: "",
              advancedDescription: "Specifies the number of files which can be processed simultaneously.  Each thread will be allocated 250MB of memory so you shouldn't run more threads than your available memory will cope with, and not more than 6 threads on a 32 bit machine",
              inputType: "selection",
              placeholder: "1",
              dependencies: null,
              options: ["1", "2", "3", "4", "5"],
            },
          ],
          conflictingArguments: [
            ["noextract", "extract"],
          ],
        }
      ],
    },
    {
      id: 2,
      command: "bowtie2",
      name: "Bowtie 2",
      basicDescription: "",
      advancedDescription: "An ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequences. It is particularly good at aligning reads of about 50 up to 100s or 1,000s of characters, and particularly good at aligning to relatively long (e.g. mammalian) genomes. Bowtie 2 indexes the genome with an FM Index to keep its memory footprint small: for the human genome, its memory footprint is typically around 3.2 GB. Bowtie 2 supports gapped, local, and paired-end alignment modes.",
      fileTypes: [
        "txt",
        "png"
      ], 
      commands:[
        {
          command: "DEFAULT",
          name: null,
          basicDescription: null,
          advancedDescription: null,
          requiredArguments:[

          ],
          optionalArguments:[
            {
              argument: "aligner",
              name: "Bowtie 2 Aligner",
              basicDescription: "",
              advancedDescription: "Aligns a set of unpaired reads to the Lambda phage reference genome using an index. The alignment results in SAM format are written to the file result.sam.",
              inputType: "boolean",
              placeholder: null,
              dependencies: null,
              options: null,
            },
          ],
          conflictingArguments: [

          ],
        }
      ],
    },
    {
      id: 3,
      command: "bowtie2",
      name: "Bowtie Test",
      basicDescription: "",
      advancedDescription: "An ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequences. It is particularly good at aligning reads of about 50 up to 100s or 1,000s of characters, and particularly good at aligning to relatively long (e.g. mammalian) genomes. Bowtie 2 indexes the genome with an FM Index to keep its memory footprint small: for the human genome, its memory footprint is typically around 3.2 GB. Bowtie 2 supports gapped, local, and paired-end alignment modes.",
      fileTypes: [
        "txt",
        "png"
      ],
      commands:[
        {
          command: "Command1",
          name: "Command 1",
          basicDescription: "Test1",
          advancedDescription: "Test1",
          requiredArguments:[
            {
              argument: "aligner1",
              name: "Bowtie 2 Aligner",
              basicDescription: "",
              advancedDescription: "Aligns a set of unpaired reads to the Lambda phage reference genome using an index. The alignment results in SAM format are written to the file result.sam.",
              inputType: "boolean",
              placeholder: null,
              dependencies: null,
              options: null,
            },
          ],
          optionalArguments:[
            {
              argument: "aligner2",
              name: "Bowtie 2 Aligner",
              basicDescription: "",
              advancedDescription: "Aligns a set of unpaired reads to the Lambda phage reference genome using an index. The alignment results in SAM format are written to the file result.sam.",
              inputType: "boolean",
              placeholder: null,
              dependencies: null,
              options: null,
            },
          ],
          conflictingArguments: [

          ],
        },
        {
          command: "Command2",
          name: "Command 2",
          basicDescription: "Test2",
          advancedDescription: "Test2",
          requiredArguments:[
            {
              argument: "aligner1",
              name: "Bowtie 2 Aligner",
              basicDescription: "",
              advancedDescription: "Aligns a set of unpaired reads to the Lambda phage reference genome using an index. The alignment results in SAM format are written to the file result.sam.",
              inputType: "boolean",
              placeholder: null,
              dependencies: null,
              options: null,
            },
          ],
          optionalArguments:[
          ],
          conflictingArguments: [

          ],
        }
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  /*
    ----- HELPER FUNCTIONS ------
  */

  selectFile() {
    var select = (document.getElementById("fileSelect")) as HTMLSelectElement;
    var value = select.selectedIndex;

    if(value != 0) {
      this.activeFile = this.files[value - 1];
    }
  }

  selectTool() {
    var select = (document.getElementById("toolSelect")) as HTMLSelectElement;;
    var value = select.selectedIndex;

    if(value != 0) {
      this.activeTool = this.tools[value - 1];
      if(this.activeTool.commands[0].command == "DEFAULT") {
        this.activeCommand = this.activeTool.commands[0];
      }
    }
  }

  selectCommand() {
    var select = (document.getElementById("toolSelect")) as HTMLSelectElement;;
    var value = select.selectedIndex;

    if(value != 0) {
      this.activeFile = this.files[value - 1];
    }
  }

  /*
      ----- TRANSITION FUNCTIONS ------
  */

  cancelStage() {
    this.activeTool = null;
    this.activeCommand = null;

    this.activeWindow = "Job Receipt";
  }

  switchAddStage() {
    if(this.activeFile != null) {
      this.receiptError = null;
      this.activeWindow = "Stage Tool";
    } else {
      this.receiptError = "You must select a file before continuing!";
    }
  }

  switchConfirmTool() {
    if(this.activeTool != null) {
      this.toolError = null;
      this.activeWindow = "Stage Configure";
    } else {
      this.toolError = "You must select a tool before continuing!";
    }
  }

  switchConfirmTemplate() {
    if(this.activeTool != null) {
      this.toolError = null;
      this.activeWindow = "Stage Configure";
    } else {
      this.toolError = "You must select a template before continuing!";
    }
  }

  switchConfirmStage() {
    // Command Set
    if(this.activeCommand == null) {
      var errorTest = document.getElementById("stageConfigureError");
      errorTest.classList.remove('hidden');
      errorTest.innerHTML = 'You must select a command to use before continuing!';
    
      // All Dependencies met
    } else if(this.checkDependencies() == false) {
      var errorTest = document.getElementById("stageConfigureError");
      errorTest.classList.remove('hidden');
      errorTest.innerHTML = 'A selected argument requires a dependency!';

      // No Conflicting Arguments
    } else if(this.checkConflicting() == false) {
      var errorTest = document.getElementById("stageConfigureError");
      errorTest.classList.remove('hidden');
      errorTest.innerHTML = 'You have two conflicting arguements selected!';

    } else {
      var commandID;
      var commandName;

      if(this.activeCommand.id == "DEFAULT") {
        commandID = null;
        commandName = null;
      } else {
        commandID = this.activeCommand.id;
        commandName = this.activeCommand.name;
      }

      var job = {
        name: "Test",
        script: {
          id: this.activeTool.id,
          name: this.activeTool.name,
        },
        command: {
          id: commandID,
          name: commandName,
        },
        entry: "",
        arguments: [],
      }

      // Get Required Arguments
      for(var x = 0; x < this.activeCommand.requiredArguments.length; x++){
        var argument = this.activeCommand.requiredArguments[x];
        var selectedOption = (document.getElementById('requiredOptionSelect'+argument.argument) as HTMLSelectElement)

        if(selectedOption.selectedIndex != 0) {
          job.arguments.push({
            command: argument.argument,
            option: selectedOption[selectedOption.selectedIndex],
          });
        }
      }

      // Get Optional Arguments
      for(var x = 0; x < this.activeCommand.optionalArguments.length; x++){
        var argument = this.activeCommand.optionalArguments[x];
        var selectedOption = (document.getElementById('optionalOptionSelect'+argument.argument) as HTMLSelectElement)

        if(selectedOption.selectedIndex != 0) {
          var finalOption;
  
          if(argument.inputType == "boolean") {
            if(selectedOption.selectedIndex == 1) {
              finalOption = "False";
            } else {
              finalOption = "True";
            }
          } else {
            finalOption = argument.options[selectedOption.selectedIndex - 1];
          }

          if(finalOption != "False") {
            job.arguments.push({
              command: argument.argument,
              option: finalOption,
            });
          }
        }
      }

      // Add script marker
      job.entry += this.activeTool.command+" ";

      // Add file
      job.entry += this.activeFile.name+" ";

      // Add command marker if needed
      if(job.command.id != null) {
        job.entry += this.activeCommand.command+" ";
      }

      // Add args
      for(var x = 0; x < job.arguments.length; x++) {
        var arg = job.arguments[x];

        job.entry += arg.command+" ";
        if(arg.option != "True") {
          job.entry += arg.option+" ";
        }
      }

      console.log(job);

      this.jobStages.push(job);
      this.activeWindow = "Job Receipt";
    }
  }

  checkDependencies() {
    // Check required arguments
    for(var i = 0; i < this.activeCommand.requiredArguments.length; i++) {
      var argument = this.activeCommand.requiredArguments[i];
      
      if(argument.dependencies != null) {
        var argumentOption = (document.getElementById('requiredOptionSelect'+argument.argument)) as HTMLSelectElement;
        
        if(argumentOption.selectedIndex != 0) {
          for(var dependency in argument.dependencies) {
            for(var x = 0; x < this.activeCommand.requiredArguments.length; x++) {
              var argToCheck = this.activeCommand.requiredArguments[x];

              if(dependency == argToCheck.argument) {
                argumentOption = (document.getElementById('requiredOptionSelect'+argToCheck.argument)) as HTMLSelectElement;

                if(argumentOption.selectedIndex == 0) {
                  return false;
                }
              }
            }

            for(var x = 0; x < this.activeCommand.optionalArguments.length; x++) {
              var argToCheck = this.activeCommand.optionalArguments[x];

              if(dependency == argToCheck.argument) {
                argumentOption = (document.getElementById('optionalOptionSelect'+argToCheck.argument)) as HTMLSelectElement;

                if(argumentOption.selectedIndex == 0) {
                  return false;
                }
              }
            }
          }
        }
      }
    }

    // Check optional requirements
    for(var i = 0; i < this.activeCommand.optionalArguments.length; i++) {
      var argument = this.activeCommand.optionalArguments[i];

      if(argument.dependencies != null) {
        var argumentOption = (document.getElementById('optionalOptionSelect'+argument.argument)) as HTMLSelectElement;

        if(argumentOption.selectedIndex != 0 && argumentOption.selectedIndex != 1) {
          for(var d in argument.dependencies) {
            for(var x = 0; x < this.activeCommand.requiredArguments.length; x++) {
              var argToCheck = this.activeCommand.requiredArguments[x];

              if(argument.dependencies[d] == argToCheck.argument) {
                argumentOption = (document.getElementById('requiredOptionSelect'+argToCheck.argument)) as HTMLSelectElement;

                if(argumentOption.selectedIndex == 0 || argumentOption.selectedIndex == 1) {
                  return false;
                }
              }
            }

            for(var x = 0; x < this.activeCommand.optionalArguments.length; x++) {
              var argToCheck = this.activeCommand.optionalArguments[x];

              if(argument.dependencies[d] == argToCheck.argument) {
                argumentOption = (document.getElementById('optionalOptionSelect'+argToCheck.argument)) as HTMLSelectElement;

                if(argumentOption.selectedIndex == 0 || argumentOption.selectedIndex == 1) {
                  return false;
                }
              }
            }
          }
        }
      }
    }

    return true;
  }

  checkConflicting() {
    if(this.activeCommand.conflictingArguments != null) {
      // Check Required

      // Check Optional

    }

    return true;
  }

  checkFileType(tool) {
    var array = tool.fileTypes;
    var item = null;
    
    if(this.activeFile != null) {
      item = this.activeFile.type;
    }

    for(var x = 0; x < array.length; x++) {
      if(array[x] == item) {
        return true;
      }
    }
    return false;
  }

  submitJobs() {
    if(this.jobStages.length == 0){ 
      this.receiptError = "You must complete at least one stage before you can submit the job.";
    } else {
      this.receiptError = null;

      var sendObject = {
        jobsList: [],
      };

      for(var x = 0; x < this.jobStages.length; x++){
        var fileID = null;
        if(x == 0) {
          fileID = this.activeFile.id;
        }

        sendObject.jobsList.push({
          name: "Test",
          entry: this.jobStages[x].entry,
          options: this.jobStages[x],
          scriptID: this.jobStages[x].script.id,
          fileID: fileID,
          created: Date.now(),
        });
      }

      console.log("Job Submitted"); 

      var http = new XMLHttpRequest();
      var url = 'http://192.168.1.100:3001/createJob';

      http.open("POST", url, true);
      http.setRequestHeader("Content-type", "application/json");
      http.onload = function() {
          console.log(this.responseText);
          //var response = JSON.parse(this.responseText);

          //console.log(response);
          /*
          if(response['status'] == "success"){
              console.log('Success!');
              console.log(response['message']);

              var newDistance = 0;
              for(var x = 0; x < response['message'].length; x++) {
                  newDistance += response['message'][x].miles;
              }
              currentDistance = newDistance;

              updateStats('general', response['message'], currentDistance);
              updateProgressBar();
          } else {
              console.log('Failure!');
              console.log(response['message']);
          }
          */
      }

      console.log(sendObject);
      http.send(JSON.stringify(sendObject));
    }
  }

  removeStage(i) {
    this.jobStages.splice(i, 2);
  }
}
