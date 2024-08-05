FROM mcr.microsoft.com/devcontainers/javascript-node:18-bookworm

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install required packages
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release vim

RUN id -u vscode &>/dev/null || useradd -ms /bin/bash vscode
RUN mkdir -p /home/vscode/.ssh
RUN chown -R vscode:vscode /home/vscode/.ssh

RUN mkdir -p /home/vscode/.ssh
RUN chown -R vscode:vscode /home/vscode/.ssh

ENTRYPOINT [ "sleep", "infinity" ]
