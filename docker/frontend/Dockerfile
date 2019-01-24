FROM library/node

RUN npm install -g yarn grunt-cli && \
    echo '{ "allow_root": true }' > /root/.bowerrc

RUN yarn add node-sass

# Define working directory.
WORKDIR /var/www/html/

# Define default command.
CMD ["bash"]