FROM ubuntu
RUN apt-update
RUN npm nodejs
COPY HELLO  ./client/UserCOntext.jsx
ENTRYPOINT [ "sleep" ]
CMD [ "6" ]